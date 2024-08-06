<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Kreait\Firebase\Factory;

class FormSubmissionController extends Controller
{
    protected $database;

    public function __construct()
    {
        $factory = (new Factory)
            ->withServiceAccount(base_path(env('FIREBASE_CREDENTIALS')))
            ->withDatabaseUri(env('FIREBASE_DATABASE_URL'));

        $this->database = $factory->createDatabase();
    }

    public function submitForm(Request $request)
    {
        $validatedData = $request->validate([
            'firstName' => 'required|string|max:255',
            'lastName' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'date' => 'required|date',
            'time' => 'required|in:Morgen,Mittag,Nachmittag',
            'reservationType' => 'required|string|max:255',
            'insuranceType' => 'nullable|string|max:255',
            'policyNumber' => 'nullable|string|max:255',
        ]);

        $formData = $validatedData;
        $formData['status'] = 'open'; // Default status

        try {
            $newFormRef = $this->database->getReference('forms')->push($formData);
            return response()->json(['message' => 'Form submitted successfully', 'id' => $newFormRef->getKey()], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error submitting form', 'error' => $e->getMessage()], 500);
        }
    }

    public function updateFormStatus(Request $request, $id)
    {
        $status = $request->input('status');
        $validStatuses = ['open', 'closed'];

        if (!in_array($status, $validStatuses)) {
            return response()->json(['message' => 'Invalid status'], 400);
        }

        try {
            $this->database->getReference('forms/' . $id)->update(['status' => $status]);
            return response()->json(['message' => 'Form status updated successfully'], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error updating form status', 'error' => $e->getMessage()], 500);
        }
    }

    public function getForms()
    {
        try {
            $forms = $this->database->getReference('forms')->getValue();
            $formattedForms = [];

            foreach ($forms as $key => $form) {
                $formattedForms[] = array_merge(['id' => $key], $form);
            }

            return response()->json($formattedForms);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Error retrieving forms', 'error' => $e->getMessage()], 500);
        }
    }
}
