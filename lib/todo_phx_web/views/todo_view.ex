defmodule TodoPhxWeb.TodoView do
  use TodoPhxWeb, :view
  alias TodoPhxWeb.TodoView

  def render("index.json", %{todos: todos}) do
    render_many(todos, TodoView, "todo.json")
  end

  def render("show.json", %{todo: todo}) do
    render_one(todo, TodoView, "todo.json")
  end

  def render("todo.json", %{todo: todo}) do
    %{
      id: todo.id,
      title: todo.title,
      complete: todo.complete
    }
  end
end
