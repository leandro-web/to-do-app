<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Task;
use Illuminate\Support\Facades\Hash;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    private $user;
    private $token;

    protected function setUp(): void
    {
        parent::setUp();

        // Criação de um usuário e login para obter o token JWT
        $this->user = User::factory()->create([
            'password' => Hash::make('password'),
        ]);

        $response = $this->postJson('/api/login', [
            'email' => $this->user->email,
            'password' => 'password',
        ]);

        $this->token = $response->json('token');
    }

    /** @test */
    public function user_can_create_task()
    {
        $response = $this->postJson('/api/tasks', [
            'title' => 'New Task',
            'status' => 'aguardando',
        ], ['Authorization' => 'Bearer ' . $this->token]);

        $response->assertStatus(201)
                 ->assertJson(['title' => 'New Task', 'status' => 'aguardando']);
    }

    /** @test */
    public function user_can_view_tasks()
    {
        $task = Task::factory()->create();

        $response = $this->getJson('/api/tasks', ['Authorization' => 'Bearer ' . $this->token]);

        $response->assertStatus(200)
                 ->assertJsonFragment(['title' => $task->title]);
    }

    /** @test */
    public function user_can_view_single_task()
    {
        $task = Task::factory()->create();

        $response = $this->getJson("/api/tasks/{$task->id}", ['Authorization' => 'Bearer ' . $this->token]);

        $response->assertStatus(200)
                 ->assertJson(['title' => $task->title]);
    }

    /** @test */
    public function user_can_update_task()
    {
        $task = Task::factory()->create();

        $response = $this->putJson("/api/tasks/{$task->id}", [
            'title' => 'Updated Task',
            'status' => 'em andamento',
        ], ['Authorization' => 'Bearer ' . $this->token]);

        $response->assertStatus(200)
                 ->assertJson(['title' => 'Updated Task', 'status' => 'em andamento']);
    }

    /** @test */
    public function user_can_delete_task()
    {
        $task = Task::factory()->create();

        $response = $this->deleteJson("/api/tasks/{$task->id}", [], ['Authorization' => 'Bearer ' . $this->token]);

        $response->assertStatus(204);
        $this->assertDatabaseMissing('tasks', ['id' => $task->id]);
    }
}
