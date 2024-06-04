import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Notfound = () => {
  const nav = useNavigate();

  useEffect(() => {
    window.alert("존재하지 않는 페이지입니다. 메인 페이지로 이동합니다.");
    nav("/", { replace: true });
  }, [nav]);

  return;
};

export default Notfound;
