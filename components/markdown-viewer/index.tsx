import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { base16AteliersulphurpoolLight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";

const customStyles = {
  code: "bg-[#f5f7ff] text-[#23a2c9] p-1 rounded-sm font-semibold text-base",
  h1: "text-4xl my-3 font-bold",
  h2: "text-3xl my-2.5 font-bold",
  h3: "text-2xl my-2 font-bold",
  h4: "text-xl my-1.5 font-bold",
  h5: "text-lg my-1 font-bold",
  h6: "text-lg font-bold",
  aside: "bg-amber-50 px-12 py-8 my-1 whitespace-normal",
  ul: "m-0 ml-8 list-disc list-inside whitespace-normal",
  ol: "m-0",
  li: "list-disc list-inside",
  hr: "visibility-visible block h-1 w-full border-gray-300 border-solid border-b-1.5 bg-transparent",
  table: "border-collapse border-1 border-gray-300",
  th: "p-1.5 font-normal",
  td: "p-1.5 font-normal",
  a: "underline underline-offset-2 text-gray-500 hover:text-gray-400",
};

export default function MarkdownViwer({ content }: { content: string }) {
  return (
    <div className="whitespace-pre-wrap text-lg/7">
      <Markdown
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                style={base16AteliersulphurpoolLight}
                PreTag="div"
                language={match[1]}
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props} className={customStyles.code}>
                {children}
              </code>
            );
          },
          h1({ children, ...props }) {
            return (
              <h1 className={customStyles.h1} {...props}>
                {children}
              </h1>
            );
          },
          h2({ children, ...props }) {
            return (
              <h2 className={customStyles.h2} {...props}>
                {children}
              </h2>
            );
          },
          h3({ children, ...props }) {
            return (
              <h3 className={customStyles.h3} {...props}>
                {children}
              </h3>
            );
          },
          h4({ children, ...props }) {
            return (
              <h4 className={customStyles.h4} {...props}>
                {children}
              </h4>
            );
          },
          h5({ children, ...props }) {
            return (
              <h5 className={customStyles.h5} {...props}>
                {children}
              </h5>
            );
          },
          h6({ children, ...props }) {
            return (
              <h6 className={customStyles.h6} {...props}>
                {children}
              </h6>
            );
          },

          aside({ children, ...props }) {
            return (
              <aside className={customStyles.aside} {...props}>
                {children}
              </aside>
            );
          },
          ul({ children, ...props }) {
            return (
              <ul {...props} className={customStyles.ul}>
                {children}
              </ul>
            );
          },
          ol({ children, ...props }) {
            return (
              <ol {...props} className={customStyles.ol}>
                {children}
              </ol>
            );
          },
          li({ children, ...props }) {
            return (
              <li {...props} className={customStyles.li}>
                {children}
              </li>
            );
          },

          hr({ ...props }) {
            return <hr {...props} className={customStyles.hr} />;
          },
          table({ children, ...props }) {
            return (
              <table {...props} className={customStyles.table}>
                {children}
              </table>
            );
          },
          th({ children, ...props }) {
            return (
              <th {...props} className={customStyles.th}>
                {children}
              </th>
            );
          },
          td({ children, ...props }) {
            return (
              <td {...props} className={customStyles.td}>
                {children}
              </td>
            );
          },

          a({ children, ...props }) {
            return (
              <a {...props} className={customStyles.a}>
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </Markdown>
    </div>
  );
}
