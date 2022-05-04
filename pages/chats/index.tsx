import type { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="py-10 divide-y-[1px]">
          {new Array(5).fill(1).map((_, i) =>(
              <div key={i} className="flex px-4 cursor-pointer py-3 items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-slate-300"/>
                  <div>
                  <p className="text-gray-700 text-sm font-medium">Steve Jebs</p>
                  <p className="text-xs font-medium text-gray-500">
                      ㅎ2 ㅎ2 내일 ㄱ
                  </p>
                  </div>
              </div>
          ))}
      </div>
    </Layout>
  );
}
export default Chats;   