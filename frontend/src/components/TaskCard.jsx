import React, { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Check, Trash2, Circle, CheckCircle2, Calendar, SquarePen, X } from "lucide-react";

const TaskCard = ({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const isCompleted = task.status === "complete";

  return (
    <Card className="group p-4 border-0 bg-gradient-card shadow-custom-sm hover:shadow-custom-md transition-shadow">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className={`flex-shrink-0 size-8 rounded-full transition-all duration-200 ${
            isCompleted
              ? "text-success hover:text-success/80"
              : "text-muted-foreground hover:text-primary"
          }`}
        >
          {isCompleted ? (
            <CheckCircle2 className="size-5" />
          ) : (
            <Circle className="size-5" />
          )}
        </Button>

        {/* Hiển thị hoặc chỉnh sửa tiêu đề */}
        <div className="flex-1 min-w-0">
          {isEditing ? (
            <Input
              placeholder="Cần phải làm gì?"
              className="flex-1 h-12 text-base border-border/50 focus:border-primary/50 focus:ring-primary/20"
              type="text"
            />
          ) : (
            <p
              className={`text-base transition-all duration-200 ${
                task.status === "complete"
                  ? "line-through text-muted-foreground"
                  : "text-foreground"
              }`}
            >
              {task.title}
            </p>
          )}

          {/* Ngày tạo & ngày hoàn thành */}
          <div className="flex items-center gap-2 mt-1">
            <Calendar className="size-3 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {new Date(task.createdAt).toLocaleString()}
            </span>
            {task.completedAt && 
             new Date(task.completedAt).getTime() !== new Date(task.createdAt).getTime() && (
              <>
                <span className="text-xs text-muted-foreground"> – </span>
                <Calendar className="size-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {new Date(task.completedAt).toLocaleString()}
                </span>
              </>
            )}
          </div>
        </div>

        {/* Nút chỉnh và xóa */}
        <div className="hidden gap-2 group-hover:inline-flex animate-slide-up">
          {/* Nút edit */}
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-info"
          >
            <SquarePen className="size-4" />
          </Button>

          {/* Nút xóa */}
          <Button
            variant="ghost"
            size="icon"
            className="flex-shrink-0 transition-colors size-8 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;