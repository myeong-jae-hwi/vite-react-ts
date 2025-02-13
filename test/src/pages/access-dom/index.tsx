import { createElement, useState } from 'react';

function AccessDOMPage() {
  // 컴포넌트 바디(body)
  // 렌더링 프로세스
  // 순수성(purity)
  // 상태 선언, 업데이트
  // 리액트 자동 화면 변경

  const [isParse, setIsParse] = useState(false);

  // 사이드 이펙트 처리
  // 리액트돔의 노드가 아닌, 실제 DOM 노드에 접근
  // - 이벤트 핸들러
  // - 이펙트 함수
  // - ref 콜백 함수

  return (
    <section
      ref={(element) => {
        console.log('section', { element });
      }}
    >
      <h2
        className="text-2xl text-react font-medium"
        ref={(element) => {
          console.log('section > h2', { element });
        }}
      >
        <abbr
          title="Document Object Model"
          className="cursor-help no-underline"
          ref={(element) => {
            console.log('section > h2 > abbr', { element });
          }}
        >
          {isParse ? 'Document Object Model' : 'DOM'}
        </abbr>{' '}
        접근/조작
      </h2>
      <button
        type="button"
        className="cursor-pointer px-2 py-0.5 bg-black text-white"
        onClick={() => {
          setIsParse((p) => !p);
        }}
      >
        toggle button
      </button>
    </section>
  );

  // JSX -> React API (JavaScript) 코드 컴파일 -> 브라우저 해석(parsing) -> UI 렌더링 (브라우저 페인팅) => 사용자
  return createElement(
    'section',
    {
      ref: (element) => {
        console.log('section', { element });
      },
    },
    createElement(
      'h2',
      {
        ref: (element) => {
          console.log('section > h2', { element });
        },
        className: 'text-2xl text-react font-medium',
      },
      createElement(
        'abbr',
        {
          ref: (element) => {
            console.log('section > h2 > abbr', { element });
          },
          title: 'Document Object Model',
          className: 'cursor-help no-underline',
        },
        isParse ? 'Document Object Model' : 'DOM'
      ),
      ' ',
      '접근/조작'
    ),
    createElement(
      'button',
      {
        type: 'button',
        className: 'cursor-pointer px-2 py-0.5 bg-black text-white',
        onClick: () => {
          setIsParse((p) => !p);
        },
      },
      'toggle button'
    )
  );
}

export default AccessDOMPage;

// import { useRef, useState } from 'react';

// function AccessDOMPage() {
//   const countRef = useRef(0);
//   const [stateCount, setStateCount] = useState(0);

//   const increaseRef = () => {
//     countRef.current += 1;
//     console.log('useRef count:', countRef.current);
//   };

//   const increaseState = () => {
//     setStateCount(stateCount + 1);
//   };

//   return (
//     <div>
//       <p>useRef count: {countRef.current} (화면에 반영되지 않음)</p>
//       <p>useState count: {stateCount} (화면에 반영됨)</p>
//       <button className="bg-red-300 p-2 m-4 rounded-lg" onClick={increaseRef}>
//         useRef 증가
//       </button>
//       <button
//         className="bg-blue-300 p-2 m-4 rounded-lg"
//         onClick={increaseState}
//       >
//         useState 증가
//       </button>
//     </div>
//   );
// }

// export default AccessDOMPage;
