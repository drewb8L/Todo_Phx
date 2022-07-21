defmodule TodoPhxWeb.TodoControllerTest do
  use TodoPhxWeb.ConnCase

  test "GET /api/todos/", %{conn: conn} do
    conn = get(conn, "/api/todos")
    json_response(conn, 200)
    assert conn.status == 200
  end

  test "POST /api/todos/", %{conn: conn} do
    conn = post(conn, "/api/todos", %{"complete" => false, "title" => "New Todo19"} )

    json_response(conn, 201)
    assert conn.status == 201

  end

  test "PUT /api/todos/", %{conn: conn} do
    todo = post(conn, "/api/todos", %{"complete" => false, "title" => "New Todo19"} )
    IO.puts "Todo: "
    id =
    Map.fetch( todo, :assigns)
    |> elem(1)
    |> Map.fetch(:todo)
    |> elem(1)
    |> Map.fetch(:id)
    |> elem(1)
    conn = put(conn, "/api/todos/#{id}", %{"complete" => true, "title" => "change title"} )

    json_response(conn, 200)

    assert conn.status == 200
  end
end
