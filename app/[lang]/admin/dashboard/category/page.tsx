import React from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Category } from '@/models/category';
import AddFormCAt from './AddFormCat';

interface PageProps {
  params: { lang: string };
}

export default async function Page({ params: { lang } }: PageProps) {
  const translation = await getDictionary(lang);

  return (
    <>
      <AddFormCAt lang={lang} translation={translation} />
    </>
  );
};
