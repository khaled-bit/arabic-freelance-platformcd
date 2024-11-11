import React, { useState } from 'react';
import './ServiceProviderDashboard.css';

const ServiceProviderDashboard = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'تعديل الملابس',
      customer: 'عميل 1',
      dueDate: '2024-11-15',
      status: 'قيد العمل',
    },
    {
      id: 2,
      title: 'خياطة حسب الطلب',
      customer: 'عميل 2',
      dueDate: '2024-11-20',
      status: 'قيد العمل',
    },
    {
      id: 3,
      title: 'تطريز يدوي',
      customer: 'عميل 3',
      dueDate: '2024-11-25',
      status: 'قيد العمل',
    },
  ]);

  const markAsFinished = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'تم الانتهاء' } : task
      )
    );
  };

  return (
    <div className="dashboard-layout">
      <aside className="sidebar sidebar-right">
        <h3 className="sidebar-title">لوحة التحكم</h3>
        <ul className="sidebar-menu">
          <li className="menu-item active">المهام</li>
          <li className="menu-item">الإعدادات</li>
          <li className="menu-item">الملف الشخصي</li>
          <li className="menu-item">تسجيل الخروج</li>
        </ul>
      </aside>
      <main className="main-content">
        <h2>لوحة التحكم لمزود الخدمة</h2>
        <table className="tasks-table">
          <thead>
            <tr>
              <th>اسم المهمة</th>
              <th>العميل</th>
              <th>تاريخ التسليم</th>
              <th>الحالة</th>
              <th>إجراء</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.title}</td>
                <td>{task.customer}</td>
                <td>{task.dueDate}</td>
                <td className={task.status === 'تم الانتهاء' ? 'status-finished' : 'status-in-progress'}>
                  {task.status}
                </td>
                <td>
                  {task.status !== 'تم الانتهاء' && (
                    <button onClick={() => markAsFinished(task.id)} className="finish-button">
                      تحديد كمكتمل
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ServiceProviderDashboard;
