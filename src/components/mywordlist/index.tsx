import React, { useCallback, useEffect, useState } from 'react';
import { Props } from 'pages';
export const MyWordList = (props: Props) => {
  const user = props;
  const getMyWords = useCallback(async (props: Props) => {
    if (!props) {
    const { data, error } = await supabase.from('wordbox').select('*').eq('user_id', props.userId);
  }, []);

  const deleteButton = useCallback(
    // このpropsはwordのid
    async (props: number | string) => {
      getMyWords(user);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
    if (!props) {
    getMyWords(props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
