defmodule TodoPhxWeb.ListController do
  use TodoPhxWeb, :controller
  alias TodoPhx.{Models, Models.List, Models.Todo}


  def index(conn, _params) do

    lists = Models.get_lists()
    IO.inspect lists
    render(conn, "index.json", lists: lists)
  end

  def show(conn, %{"id" => id}) do

    list = Models.get_list_and_todos(id)
    render(conn, "show.json", list: list)
  end

end
