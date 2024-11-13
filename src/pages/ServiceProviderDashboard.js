import React, { useState } from 'react';
import './ServiceProviderDashboard.css';
import WhyUs from '../components/WhyUs'; // Ensure the correct path to the component

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

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const markAsFinished = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: 'تم الانتهاء' } : task
      )
    );
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((task) =>
      statusFilter ? task.status === statusFilter : true
    )
    .filter((task) =>
      dateFilter ? task.dueDate === dateFilter : true
    );

  return (
    <div className="dashboard-layout">
      {isSidebarOpen && (
        <aside className="sidebar sidebar-right">
          <h3 className="sidebar-title">لوحة التحكم</h3>
          <ul className="sidebar-menu">
            <li className="menu-item active">المهام</li>
            <li className="menu-item">الإعدادات</li>
            <li className="menu-item">الملف الشخصي</li>
            <li className="menu-item">تسجيل الخروج</li>
            <li className="menu-item">
              <a href="/" className="menu-link">
                الرئيسية
              </a>
            </li>
          </ul>
          <button onClick={() => setIsSidebarOpen(false)} className="close-sidebar-button">
            إغلاق القائمة
          </button>
        </aside>
      )}
      <div className="main-content-wrapper">
        <main className="main-content">
          {!isSidebarOpen && (
            <button onClick={() => setIsSidebarOpen(true)} className="open-sidebar-button">
              عرض القائمة
            </button>
          )}
          <h2>لوحة التحكم لمزود الخدمة</h2>
          <div className="filters-container">
            <input
              type="text"
              placeholder="ابحث عن مهمة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="filter-input"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="filter-select"
            >
              <option value="">كل الحالات</option>
              <option value="قيد العمل">قيد العمل</option>
              <option value="تم الانتهاء">تم الانتهاء</option>
            </select>
            <input
              type="date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              className="filter-input"
            />
          </div>
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
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task) => (
                  <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.customer}</td>
                    <td>{task.dueDate}</td>
                    <td
                      className={
                        task.status === 'تم الانتهاء'
                          ? 'status-finished'
                          : 'status-in-progress'
                      }
                    >
                      {task.status}
                    </td>
                    <td>
                      {task.status !== 'تم الانتهاء' && (
                        <button
                          onClick={() => markAsFinished(task.id)}
                          className="finish-button"
                        >
                          تحديد كمكتمل
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">لا توجد مهام مطابقة.</td>
                </tr>
              )}
            </tbody>
          </table>
        </main>
        <footer className="dashboard-footer">
          <WhyUs />
        </footer>
      </div>
    </div>
  );
};

export default ServiceProviderDashboard;
