import Container from "postcss/lib/container";

function Home() {
  return (
    <>
      <div className="w-[w100] flex flex-col">
        <div className="w-100 h-20 items-center justify-center flex font-bold text-xl">
          Chores ToDo List
        </div>
        <center>
          <div className="mx-10">
            <div className="w-100  justify-between items-center flex  bg-white border rounded-lg my-1 px-3">
              <input type="checkbox" class="default:ring-2 ..." />
              <div className="item-center m-3 w-full text-justify  ">
                Create Guest Experience mobile chek-in
              </div>
              <div className="border-2 border-solid border-red-500 m-1 flex items-center">
                <a href="" className="item-center justify-center flex">
                  {" "}
                  <span className="material-symbols-outlined ">
                    delete
                  </span>{" "}
                </a>
              </div>
            </div>
            <div className="w-100  justify-between items-center flex  bg-white border rounded-lg my-1 px-3">
              <input type="checkbox" class="default:ring-2 ..." />
              <div className="item-center m-3 w-full text-justify ">
                Document current CI/CD process
              </div>
              <div className="border-2 border-solid border-red-500 m-1 flex items-center">
                <a href="" className="item-center justify-center flex">
                  {" "}
                  <span className="material-symbols-outlined ">
                    delete
                  </span>{" "}
                </a>
              </div>
            </div>
            <div className="w-100  justify-between items-center flex  bg-white border rounded-lg my-1 px-3">
              <input type="checkbox" class="default:ring-2 ..." />
              <div className="item-center m-3 w-full text-justify ">
                Perfom Code Review for final Pillow-Talk realease
              </div>
              <div className="border-2 border-solid border-red-500 m-1 flex items-center">
                <a href="" className="item-center justify-center flex">
                  {" "}
                  <span className="material-symbols-outlined ">
                    delete
                  </span>{" "}
                </a>
              </div>
            </div>
            <div className="w-100  justify-between items-center flex  bg-white border rounded-lg my-1 px-3">
              <input type="checkbox" class="default:ring-2 ..." />
              <div className="item-center m-3 w-full text-justify ">
                Implement a new Color Palette from Design Team
              </div>
              <div className="border-2 border-solid border-red-500 m-1 flex items-center">
                <a href="" className="item-center justify-center flex">
                  {" "}
                  <span className="material-symbols-outlined ">
                    delete
                  </span>{" "}
                </a>
              </div>
            </div>
            <div className="w-100  justify-between items-center flex  bg-white border rounded-lg my-1 px-3">
              <input type="checkbox" class="default:ring-2 ..." />
              <div className="item-center m-3 w-full text-justify ">
                Fix image uploading process for guest check-in{" "}
              </div>
              <div className="border-2 border-solid border-red-500 m-1 flex items-center">
                <a href="" className="item-center justify-center flex">
                  {" "}
                  <span className="material-symbols-outlined ">
                    delete
                  </span>{" "}
                </a>
              </div>
            </div>
            <div className="w-100  justify-between items-center flex  bg-white border rounded-lg my-1 px-3">
              <input type="checkbox" class="default:ring-2 ..." />
              <div className="item-center m-3 w-full text-justify ">
                Provide on-boarding documentation{" "}
              </div>
              <div className="border-2 border-solid border-red-500 m-1 flex items-center">
                <a href="" className="item-center justify-center flex">
                  {" "}
                  <span className="material-symbols-outlined ">
                    delete
                  </span>{" "}
                </a>
              </div>
            </div>
          </div>
          {/* ini batas list*/}
        </center>
        <hr className="border-solid border-2" />
        <center>
          <span className="text-lg font-bold">Done : 0</span>
        </center>
        <div className=" px-10 w-full">
          <span>Add todo</span>
          <input
            type="text"
            placeholder="submit for todo list"
            // value=""
            // disabled
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
          <div className="add text-white bg-zinc-600 w-[100PX] rounded-lg text-center mt-2 font-bold py-3 ">
            <a href="">ADD TASK</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
