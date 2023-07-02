import { Menu } from '@mantine/core';

export default function MenuDropdown({ position = "left-start", items}) {
    return (
        <Menu position={position} offset={6} withArrow={true}>
            <Menu.Target>
                <button>Üç nokta menü</button>
            </Menu.Target>

            <Menu.Dropdown>
                {
                    items?.map(item => {
                        return (
                            <Menu.Item key={item.name} icon={<i className={item.icon} style={{fontWeight: "500"}} />} onClick={() => item.click()} >
                                {item.name}
                            </Menu.Item>
                        )
                    })
                }
            </Menu.Dropdown>
        </Menu>
    );
}

