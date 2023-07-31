export interface DropdownItemProps {
    title: string;
    icon: React.FC;
    link: string;
    content: string;
    details: string;
  }
  
  const DropdownItem: React.FC<DropdownItemProps> = (props: DropdownItemProps) => {
    return (
      <a className="dropdown-item dropdown-notifications-item" href={props.link}>
        <div className={`dropdown-notifications-item-icon bg-warning`}>
          <props.icon />
        </div>
        <div className="dropdown-notifications-item-content">
          <div className="dropdown-notifications-item-content-details">{props.details}</div>
          <div className="dropdown-notifications-item-content-text">{props.content}</div>
        </div>
      </a>
    );
  };
  
export default DropdownItem;
 
  
  
  
  
  