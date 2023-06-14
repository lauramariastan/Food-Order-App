import React from "react";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Soupe à l'oignon",
    description:
      "This is a traditional French soup made of onions and beef stock, usually served with croutons and melted cheese on top.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Coq au vin",
    description:
      "The dish sees chicken braised with wine, mushrooms, salty pork or bacon (lardons), mushrooms, onions, garlic, and sometimes even a drop of brandy.",
    price: 39.99,
  },
  {
    id: "m3",
    name: "Cassoulet",
    description:
      "A comfort dish of white beans stewed slowly with meat. The dish typically uses pork or duck but can include sausages, goose, mutton or whatever else the chef has lying around.",
    price: 25.99,
  },
  {
    id: "m4",
    name: "Bœuf bourguignon",
    description:
      "This dish is essentially a stew made from beef braised in red wine, beef broth, and seasoned vegetables including pearl onions and mushrooms.",
    price: 35.99,
  },
  {
    id: "m5",
    name: "Chocolate soufflé",
    description:
      "The crispy chocolatey crust is perfect for letting the creamy chocolate ooze out for a rich surprise.",
    price: 15.99,
  },
  {
    id: "m6",
    name: "Flamiche",
    description:
      "It has a puff-pastry crust filled with cheese and vegetables and resembles a quiche. The traditional filling is leeks and cream, although various variations exist.",
    price: 21.99,
  },
  {
    id: "m7",
    name: "Confit de canard",
    description:
      "This sees the duck meat marinated in salt, garlic, and thyme for around 36 hours and then slow-cooked in its own fat at low temperatures. It is typically served with confit roasted potatoes and garlic on the side.",
    price: 39.99,
  },
  {
    id: "m8",
    name: "Salade Niçoise",
    description:
      "The salad is a mix of lettuce, fresh tomatoes, boiled eggs, (canned or fresh) tuna, green beans, Nicoise Cailletier olives, and anchovies.",
    price: 9.99,
  },
  {
    id: "m9",
    name: "Ratatouille",
    description:
      "The dish sees vegetables shallow-fried and then layered in a casserole dish before being baked in an oven.",
    price: 18.99,
  },
  {
    id: "m10",
    name: "Tarte Tatin",
    description:
      "A traditional apple pie with the apples cooked in sugar and butter.",
    price: 18.99,
  },
  {
    id: "m11",
    name: "Potatoes Dauphinoise",
    description:
      "Potato + cream + cheese with a hint of garlic and thyme. Seriously, what could be better than that?",
    price: 18.99,
  },
  {
    id: "m12",
    name: "Lyonnaise salad",
    description:
      "This traditional Lyonnaise Salad, made of frisée lettuce, tossed in a warm and delicious vinaigrette and topped with crispy bacon and a poached egg.",
    price: 9.99,
  },
  {
    id: "m13",
    name: "French lentils with dijon vinaigrette",
    description:
      "This traditional Lyonnaise Salad, made of frisée lettuce, tossed in a warm and delicious vinaigrette and topped with crispy bacon and a poached egg.",
    price: 14.99,
  },
  {
    id: "m14",
    name: "French coconut pie",
    description:
      "This French Coconut Pie consists of a crackly, sugary crust filled with wonderfully gooey vanilla and coconut.",
    price: 19.99,
  },
  {
    id: "m15",
    name: "Profiteroles",
    description:
      "Pate a choux pastry filled with ice cream and drenched in warm chocolate sauce. Who could say no to anything covered in chocolate?",
    price: 14.99,
  },
  {
    id: "m16",
    name: "Mousse au Chocolat",
    description:
      "Simple yet sophisticated, airy as a cloud but also rich and intense.",
    price: 14.99,
  },
];

export const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.ul}>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
