import { useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

interface FAQ {
  title: string;
  text: string;
}

interface AccordionProps {
  data: FAQ[];
}

interface AccordionItemProps {
  num: number;
  title: string;
  children: React.ReactNode;
  curOpen: number | null;
  onOpen: (num: number | null) => void;
}

function Accordion({ data }: AccordionProps) {
  const [curOpen, setCurOpen] = useState<number | null>(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title={"React Important Topics"}
        num={data.length}
        key={"React Important Topics"}
      >
        <ul className="content-box">
          <li>Components and Props</li>
          <li>State and Lifecycle</li>
          <li>Handling Events</li>
          <li>Conditional Rendering</li>
          <li>Lists and Keys</li>
          <li>Forms</li>
          <li>Lifting State Up</li>
          <li>Composition vs Inheritance</li>
          <li>React Hooks</li>
          <li>Context API</li>
          <li>Error Boundaries</li>
          <li>React Router</li>
          <li>Performance Optimization</li>
          <li>Testing in React</li>
          <li>Server-Side Rendering (SSR)</li>
          <li>Static Site Generation (SSG)</li>
          <li>State Management Libraries (Redux, MobX)</li>
          <li>Type Checking with PropTypes or TypeScript</li>
          <li>React Developer Tools</li>
          <li>Accessibility in React</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({
  curOpen,
  onOpen,
  num,
  title,
  children,
}: AccordionItemProps) {
  const isOpen = curOpen === num;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className={`number ${isOpen ? "open" : ""}`}>
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className={`title ${isOpen ? "open" : ""}`}>{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
