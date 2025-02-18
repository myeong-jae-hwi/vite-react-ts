import { useEffect } from 'react';
import RecipeCreate from './components/RecipeCreate';
import RecipeDelete from './components/RecipeDelete';
import RecipeEdit from './components/RecipeEdit';
import RecipeList from './components/RecipeList';
import RecipeSingle from './components/RecipeSingle';

function DataFetchingPage() {
  useEffect(() => {
    // 리얼타임 데이터베이스 변경을 구독
    const channel = subscribe((payload) => {
      console.log(payload);

      // 추가(INSERT), 수정(UPDATE), 삭제(DELETE)
      switch (payload.eventType) {
        case 'INSERT': {
          setData((data) => {
            const nextData = [...data!, payload.new];
            return nextData as MemoItem[];
          });
          break;
        }
        case 'UPDATE': {
          setData((data) => {
            const nextData = data!.map((item) =>
              item.id === payload.new.id ? payload.new : item
            );
            return nextData as MemoItem[];
          });
          break;
        }
        case 'DELETE': {
          setData((data) => {
            const nextData = data!.filter((item) => item.id !== payload.old.id);
            return nextData;
          });
        }
      }
    });

    return () => {
      // 리얼타임 데이터베이스 변경을 구독 취소
      channel.unsubscribe();
    };
  }, []);

  return (
    <section className="flex flex-col gap-5 my-5">
      <h2 className="text-2xl font-medium">데이터 변형(Data Mutations)</h2>
      <RecipeDelete />
      <RecipeEdit />
      <RecipeCreate />

      <hr />

      <h2 className="text-2xl font-medium">데이터 쿼리(Data Query)</h2>

      <h3 className="text-xl font-medium">레시피 리스트</h3>
      <RecipeList />

      <hr />

      <h3 className="text-xl font-medium">레시피 싱글</h3>
      <RecipeSingle />
    </section>
  );
}

export default DataFetchingPage;
