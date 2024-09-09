<?php

namespace App\Services;

use App\Models\Task;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TaskService
{
    public function getAll()
    {
        return Task::all();
    }

    public function getById($id)
    {
        return Task::findOrFail($id);
    }

    public function create(array $data)
    {
        try {
            return Task::create($data);
        } catch (\Exception $e) {
            throw new \Exception("Error ao criar tarefa " . $e->getMessage(), 500);            
        }
        
    }

    public function update($id, array $data)
    {
        $task = Task::find($id);

        if(!$task) {
            throw new ModelNotFoundException("Tarefa não encontrada", 404);
        }

        $task->update($data);
        return $task;
    }

    public function delete($id)
    {
        $task = Task::find($id);

        if (!$task) {
            throw new ModelNotFoundException("Tarefa não encontrada", 404);
        }
        
        $task->delete();
        return true;
    }
}
