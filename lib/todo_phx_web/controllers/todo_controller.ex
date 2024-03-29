defmodule TodoPhxWeb.TodoController do
  use TodoPhxWeb, :controller
  alias TodoPhx.{Models, Models.Todo}

  def index(conn, _params) do
    todos = Models.list_todos()
    render(conn, "index.json", todos: todos)
  end

  def create(conn, todo_params) do
    with {:ok, %Todo{} = todo} <- Models.create_todo(todo_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.todo_path(conn, :show, todo))
      |> render("show.json", todo: todo)
    end
  end

  def show(conn, %{"id" => id}) do
    todo = Models.get_todo!(id)
    render(conn, "show.json", todo: todo)
  end

  def update(conn, todo_params) do
    todo = Models.get_todo!(conn.path_params["id"])

    with {:ok, %Todo{} = todo} <- Models.update_todo(todo, todo_params) do
      render(conn, "show.json", todo: todo)
    end
  end

  def delete(conn, %{"id" => id}) do
    todo = Models.get_todo!(id)

    with {:ok, %Todo{} = todo} <- Models.delete_todo(todo) do
      render(conn, "show.json", todo: todo)
    end
  end
end
