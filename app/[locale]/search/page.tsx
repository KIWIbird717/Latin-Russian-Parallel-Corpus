"use client";

import { BreadcrumbHeader } from "@/shared/ui/BreadcrumbHeader";
import { Input } from "@/shared/ui/Input";
import { MultipleSelect } from "@/shared/ui/intent/ui/multiple-select";
import { Page } from "@/shared/ui/Page";
import { Search } from "@/shared/ui/Search";
import { Tabs } from "@/shared/ui/Tabs";

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
  { id: 4, name: "Date" },
  { id: 5, name: "Elderberry" },
  { id: 6, name: "Fig" },
  { id: 7, name: "Grape" },
  { id: 8, name: "Honeydew" },
  { id: 9, name: "Kiwi" },
  { id: 10, name: "Lemon" },
  { id: 11, name: "Mango" },
  { id: 12, name: "Nectarine" },
  { id: 13, name: "Orange" },
  { id: 14, name: "Papaya" },
  { id: 15, name: "Quince" },
  { id: 16, name: "Raspberry" },
  { id: 17, name: "Strawberry" },
  { id: 18, name: "Tangerine" },
  { id: 19, name: "Ugli Fruit" },
  { id: 20, name: "Watermelon" },
];

export default function SearchPage() {
  return (
    <>
      <BreadcrumbHeader title="Поиск" />
      <Page>
        <Tabs
          className="w-[300px]"
          id="huh"
          tabs={[
            { id: 1, label: "Huh 1" },
            { id: 2, label: "Huh 2" },
          ]}
        />
        <Input label="Label" />
        <Search label="Search" />

        <MultipleSelect className="max-w-xs" label="Fruits" items={fruits}>
          {(item) => {
            return <MultipleSelect.Item textValue={item.name}>{item.name}</MultipleSelect.Item>;
          }}
        </MultipleSelect>
      </Page>
    </>
  );
}
