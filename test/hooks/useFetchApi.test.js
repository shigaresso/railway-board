import { fetchThreadDatas } from "../../src/hooks/useFetchApi";

describe("掲示板一覧を取得する GET メソッドのテスト", () => {
  it("GET メソッド成功時に対しての記述", () => {
    const threadDatas = [
      {
        "id": "4",
        "title": "好きなプログラミング言語"
      },
      {
        "id": "14",
        "title": "あなたのGitHub"
      },
      {
        "id": "24",
        "title": "railwayについて"
      },
      {
        "id": "34",
        "title": "hoge"
      },
      {
        "id": "44",
        "title": "hoge2"
      },
      {
        "id": "54",
        "title": "hoge3"
      },
      {
        "id": "64",
        "title": "hoge4"
      },
      {
        "id": "74",
        "title": "hoge5"
      },
      {
        "id": "84",
        "title": "こんにちは世界"
      },
      {
        "id": "94",
        "title": "aaaaa"
      }
    ]
    return fetchThreadDatas('https://railway-react-bulletin-board.herokuapp.com/threads').then(data => {
      expect(data).toEqual(threadDatas);
    });
  });

  it('GET メソッドの URL を間違えた際の処理', () => {
    expect(() => fetchThreadDatas('https://railway-react-bulletin-board.herokuapp.com/threadsb'))
      .rejects.toThrow("404");
    // ↑ 非同期処理の場合、 と .Throw() の前に .rejects を付け加える必要がある
  });
});