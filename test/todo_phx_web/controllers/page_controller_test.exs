defmodule TodoPhxWeb.PageControllerTest do
  use TodoPhxWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    IO.inspect(conn)
    assert html_response(conn, 200) =~ "Welcome to Phoenix!"
  end
end
