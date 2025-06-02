import { useState } from 'react';
import { Link } from 'react-router-dom';
import { menuTree } from '../menuData';

function Sidebar() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (title) => {
    setExpandedItems(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const renderMenuItems = (items, level = 0) => {
    return items.map((item, index) => (
      <div key={index} className={`menu-item level-${level}`}>
        <div className="menu-item-header">
          <Link to={item.link} className="menu-link">
            {item.title}
          </Link>
          {item.children && item.children.length > 0 && (
            <button 
              className="expand-button"
              onClick={() => toggleExpanded(item.title)}
            >
              {expandedItems[item.title] ? '-' : '+'}
            </button>
          )}
        </div>
        
        {item.children && item.children.length > 0 && expandedItems[item.title] && (
          <div className="submenu">
            {renderMenuItems(item.children, level + 1)}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>CineWorld</h2>
      </div>
      <nav className="sidebar-nav">
        {renderMenuItems(menuTree.children)}
      </nav>
    </div>
  );
}

export default Sidebar;