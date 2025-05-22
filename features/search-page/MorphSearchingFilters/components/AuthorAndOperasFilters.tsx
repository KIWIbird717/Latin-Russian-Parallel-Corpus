"use client";

import { Disclosure } from "@/shared/ui/Disclosure";
import { ComboBox } from "@/shared/ui/intent/ui/combo-box";
import { FC } from "react";

const users = [
  { id: 1, name: "Barbara Kirlin Sr.", image_url: "https://i.pravatar.cc/150?img=1" },
  { id: 2, name: "Rosemarie Koch", image_url: "https://i.pravatar.cc/150?img=2" },
  { id: 3, name: "Mrs. Reva Heaney Jr.", image_url: "https://i.pravatar.cc/150?img=3" },
  { id: 4, name: "Ms. Ettie Abshire DVM", image_url: "https://i.pravatar.cc/150?img=4" },
  { id: 5, name: "Bria Ziemann", image_url: "https://i.pravatar.cc/150?img=5" },
  { id: 6, name: "Heloise Borer Sr.", image_url: "https://i.pravatar.cc/150?img=6" },
  {
    id: 7,
    name: "Miss Jacinthe Gerlach DVM",
    image_url: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Miss Stephania Schaefer Sr.",
    image_url: "https://i.pravatar.cc/150?img=8",
  },
  { id: 9, name: "Kevon Hackett MD", image_url: "https://i.pravatar.cc/150?img=9" },
  { id: 10, name: "Tom Ledner", image_url: "https://i.pravatar.cc/150?img=10" },
];

export const AuthorAndOperasFilters: FC = () => {
  return (
    <Disclosure label="Авторы и Опреы">
      <ComboBox placeholder="Выберите автора" label="Автор">
        <ComboBox.Input />
        <ComboBox.List items={users}>
          {(item) => (
            <ComboBox.Option id={item.id} textValue={item.name}>
              {item.name}
            </ComboBox.Option>
          )}
        </ComboBox.List>
      </ComboBox>

      <ComboBox placeholder="Выберите оперу" label="Оперы">
        <ComboBox.Input />
        <ComboBox.List items={users}>
          {(item) => (
            <ComboBox.Option id={item.id} textValue={item.name}>
              {item.name}
            </ComboBox.Option>
          )}
        </ComboBox.List>
      </ComboBox>
    </Disclosure>
  );
};
