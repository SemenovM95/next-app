import {useMemo, useRef} from "react";
import {IFilterOptions} from "lib/types/IFilterOptoins";

interface IFilterObject {
  id: number
}

export function useFilter<T extends IFilterObject>(items: Array<T>, options: IFilterOptions): Array<T> {
  const {sort, filter} = options;
  const result = useRef<Array<T>>(items);

  useMemo(() => {
    if (!filter.value) return result.current = items;
    result.current = items.filter((el: T) => (el[filter.name as keyof T] as unknown as string).replaceAll(' ', '')
      .toLowerCase()
      .includes(filter.value.replaceAll(' ', '').toLowerCase())
    )
  }, [items, filter.value, filter.name])

  useMemo(() => {
    sort === 'ASC' ?
      result.current = result.current.sort((a, b) => a.id - b.id) :
      result.current = result.current.sort((a, b) => b.id - a.id)
  }, [result.current, sort])

  return result.current
}