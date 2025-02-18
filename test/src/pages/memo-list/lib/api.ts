import { supabase } from './supabase-client';
import type {
  MemoItem,
  MemoItemInsert,
  MemoItemUpdate,
} from './supabase-client';

export const addMemoItem = async (...newMemoItems: MemoItemInsert[]) => {
  return await supabase.from(DATABASE_NAME).insert(newMemoItems).select();
};

export const editMemoItem = async (updateMemoItem: MemoItemUpdate) => {
  if (!updateMemoItem.id) {
    throw new Error('updateMemoItem 객체에 id 속성 입력이 필요합니다.');
  }

  return await supabase
    .from(DATABASE_NAME)
    .update(updateMemoItem)
    .eq('id', updateMemoItem.id)
    .select();
};

export const deleteMemoItem = async (deleteItemId: MemoItem['id']) => {
  return await supabase.from(DATABASE_NAME).delete().eq('id', deleteItemId);
};
