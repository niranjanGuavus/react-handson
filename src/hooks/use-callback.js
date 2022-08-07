import { useCallback } from 'react';

function MyBigList({ term, onItemClick }) {
    const items = useSearch(term);
    const map = item => <div onClick={onItemClick}>{item}</div>;
    return <div>{items.map(map)}</div>;
  }
  export default React.memo(MyBigList)


export function MyParent({ term }) {
  const onItemClick = useCallback(event => {
    console.log('You clicked ', event.currentTarget);
  }, [term]);
  return (
    <MyBigList
      term={term}
      onItemClick={onItemClick}
    />
  );
}
