import { useMultiplePageForm } from "../../utils/hooks/useMultiPageForm";

export const MultiPageForm = (props) => {
  let { children, pages = ["default"] } = props;

  let { current, next, previous, goto, reset } = useMultiplePageForm(pages);

  const isFunction = (obj) => typeof obj === "function";

  return isFunction(children)
    ? children({
        current,
        next,
        previous,
        reset,
        goto,
      })
    : children;
};
