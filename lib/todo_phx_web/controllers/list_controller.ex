defmodule TodoPhxWeb.ListController do
  use TodoPhxWeb, :controller
  alias TodoPhx.{Models, Models.List, Models.Todo}

  def index(conn, _params) do
    lists = Models.get_lists()
    render(conn, "index.json", lists: lists)
  end

  def show(conn, %{"id" => id}) do
    list = Models.get_list_and_todos(id)
    render(conn, "show.json", list: list)
  end

  def create(conn, list_params) do
    with {:ok, %List{} = list} <- Models.create_list(list_params) do
      conn
      |> put_status(:created)
      |> put_req_header("location", Routes.list_path(conn, :show, list))
      |> render("show.json", list: list)
    end
  end

  def update(conn, list_params) do
    list = Models.get_list_and_todos(conn.path_params["id"])

    with {:ok, %List{} = list} <- Models.update_list(list, list_params) do
      render(conn, "show.json", list: list)
    end
  end

  def delete(conn, %{"id" => id}) do
    list = Models.get_list_and_todos(id)

    with {:ok, %List{} = list} <- Models.delete_list(list) do
      render(conn, "show.json", list: list)
    end
  end
end
