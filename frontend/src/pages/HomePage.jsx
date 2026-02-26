import AddTask from "@/components/AddTask";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import React, { useEffect, useState } from "react";


import { toast } from "sonner";
import api from "@/lib/axios";


const HomePage = () => {
  const [taskBuffer, setTaskBuffer] = useState([]);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completeTaskCount, setCompleteTaskCount] = useState(0);
  const [filter, setFilter] = useState("all");


  //logic
  const fetchTasks = async () => {
    try {
      const res = await api.get("/tasks");
      setTaskBuffer(res.data.tasks);
      setActiveTaskCount(res.data.activeCount);
      setCompleteTaskCount(res.data.completeCount);
      
    } catch (error) {
      console.error("Lỗi xảy ra khi truy xuất tasks:", error);
      toast.error("Lỗi xảy ra khi truy xuất tasks.");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
    const handleTaskChanged = () => {
    fetchTasks();
  };  
  //biến  const 
  const filteredTasks = taskBuffer.filter((task) => {
    switch (filter) {
      case "active":
        return task.status === "active";
      case "completed":
        return task.status === "complete";
      default:
        return true;
    }
  });  
  
  return (
    <div className="min-h-screen w-full relative bg-white">
  {/* Teal Glow Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at top right,
          rgba(56, 193, 182, 0.5),
          transparent 70%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />
     {/* Your Content/Components */}
         <div className="container pt-8 mx-auto relative z-10">
      <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
        {/* Đầu Trang */}
        <Header/>
        
        {/* Tạo Nhiệm Vụ */}
        <AddTask handleNewTaskAdded={handleTaskChanged}/>
        
        {/* Thống Kê và Bộ lọc */}
        <StatsAndFilters
          filter={filter}
          setFilter={setFilter}
          activeTasksCount={activeTaskCount}
          completedTasksCount={completeTaskCount}
        />
        
        {/* Danh Sách Nhiệm Vụ */}
        <TaskList 
          filteredTasks={filteredTasks} 
          filter={filter}
          handleTaskChanged={handleTaskChanged}
        />
        
        {/* Phân Trang và Lọc Theo Date */}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <TaskListPagination />
          <DateTimeFilter />
        </div>

        {/* Chân Trang */}
        <Footer 
          activeTasksCount={activeTaskCount}
          completedTasksCount={completeTaskCount}
        />
      </div>
    </div>
</div>

  );
};

export default HomePage;