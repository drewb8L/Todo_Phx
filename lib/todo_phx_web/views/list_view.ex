defmodule TodoPhxWeb.ListView do
  use TodoPhxWeb, :view
  alias TodoPhxWeb.ListView

  def render("index.json", %{lists: lists}) do
    render_many(lists, ListView, "list.json")
  end

  def render("show.json", %{list: list}) do
    render_one(list, ListView, "list.json")
  end

  def render("list.json", %{list: list}) do
    %{
      id: list.id,
      name: list.name,
      todos: list.todos
    }
  end
end
