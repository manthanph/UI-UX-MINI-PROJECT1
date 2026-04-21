import React, { useState } from 'react';
import './App.css';

import Login         from './screens/Login';
import Dashboard     from './screens/Dashboard';
import CreateNotice  from './screens/CreateNotice';
import NoticeList    from './screens/NoticeList';
import NoticeDetail  from './screens/NoticeDetail';
import Notifications from './screens/Notifications';
import Profile       from './screens/Profile';
import Settings      from './screens/Settings';
import { NOTICES as INITIAL_NOTICES } from './data/notices';

export default function App() {
  const [screen, setScreen]       = useState('login');
  const [role, setRole]           = useState('admin');
  const [notices, setNotices]     = useState(INITIAL_NOTICES);
  const [selectedId, setSelectedId] = useState(null);

  const navigate = (id, data) => {
    if (id === 'detail' && data) setSelectedId(data);
    setScreen(id);
  };

  const addNotice = (notice) => {
    const newNotice = {
      ...notice,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      unread: true,
      body: notice.description,
      author: role === 'admin' ? 'Dr. A. Kulkarni' : 'Rahul Sharma',
      dept: notice.audience,
      readCount: 0,
      totalStudents: 120,
    };
    setNotices(prev => [newNotice, ...prev]);
  };

  const screenProps = { navigate, role, setRole, notices, addNotice, selectedId };

  switch (screen) {
    case 'login':      return <Login         {...screenProps} />;
    case 'dashboard':  return <Dashboard     {...screenProps} />;
    case 'create':     return <CreateNotice  {...screenProps} />;
    case 'notices':    return <NoticeList    {...screenProps} />;
    case 'detail':     return <NoticeDetail  {...screenProps} />;
    case 'notif':      return <Notifications {...screenProps} />;
    case 'profile':    return <Profile       {...screenProps} />;
    case 'settings':   return <Settings      {...screenProps} />;
    default:           return <Login         {...screenProps} />;
  }
}
