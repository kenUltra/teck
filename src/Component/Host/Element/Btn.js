import btn from "../styles/Choice.module.css";

export default function Btn({ hideLeft, hideRight }) {
  return (
    <div className={btn.wrapbtn}>
      <div className={btn.blur}>
        <div className={btn.leftBtn} onClick={hideLeft}>
          <button>L</button>
        </div>
      </div>
      <div className={btn.blur}>
        <div className={btn.rightBtn} onClick={hideRight}>
          <button>R</button>
        </div>
      </div>
    </div>
  );
}
