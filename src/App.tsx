import React, {
  useEffect,
  useState,
  useDebugValue,
  useId,
  Profiler,
} from "react";
import login from "./login";
import { useActionState } from "react";
import image from "./assets/Frame_495@3x.png";
import image2 from "./assets/Frame_496@3x.png";
// const imageUrl = new URL(`../public/Frame_495@3x.png`, import.meta.url);
console.log(image);
function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useDebugValue(isOnline ? "Online" : "Offline");
  return isOnline;
}
function onRender(id: string, phase: string, actualDuration: number) {
  console.log(id, phase, actualDuration);
}
export default function RequestTracker(): React.ReactElement {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const passwordHintId = useId();
  async function handleClick() {
    setPending(pending + 1);
    await delay(3000);
    setPending((pending) => pending - 1);
    setCompleted(completed + 1);
  }

  return (
    <>
      <Profiler id="Sidebar" onRender={onRender}>
        <AddToCartForm itemID="1" itemTitle="JavaScript：权威指南" />
        <AddToCartForm itemID="2" itemTitle="JavaScript：优点荟萃" />
      </Profiler>
    </>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    console.log("延迟中...");
    setTimeout(resolve, ms);
  });
}

async function increment(previousState: any, formData: any) {
  return previousState + 1;
}

function StatefulForm({}) {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form>
      {state}
      <button formAction={formAction}>+1</button>
    </form>
  );
}
interface Props {
  itemID: string;
  itemTitle: string;
}
interface State {
  success?: boolean;
  cartSize?: number;
  message?: string;
}

function addToCart(prevState: State, queryData: FormData): State {
  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return {
      success: true,
      cartSize: 12,
    };
  } else {
    return {
      success: false,
      message: "商品已售罄",
    };
  }
}

function AddToCartForm({ itemID, itemTitle }: Props) {
  const isOnline = useOnlineStatus();
  const [formState, formAction, isPending] = useActionState(
    addToCart,
    {},
    "url"
  );
  const passwordHintId = useId();
  return (
    <form action={formAction}>
      {passwordHintId}
      {isOnline ? <p>online</p> : <p>offline</p>}
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit">加入购物车</button>
      {formState?.success && (
        <div className="toast">
          成功加入购物车！当前购物车中共有 {formState.cartSize} 件商品。
          <img src={image} srcSet={`${image} 2560w, ${image2} 1440w`} />
        </div>
      )}
      {formState?.success === false && (
        <div className="error">加入购物车失败：{formState.message}</div>
      )}
    </form>
  );
}
