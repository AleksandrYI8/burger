import React from 'react';
import AddForm from './AddForm';
import { getDictionary } from '@/app/[lang]/dictionaries';

interface PageProps {
  params: { lang: string };
}

export default async function Page({ params: { lang } }: PageProps) {
  const translation = await getDictionary(lang);

  return (
    <>
      <AddForm lang={lang} translation={translation} />
    </>
  );
};
