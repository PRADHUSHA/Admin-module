import React, { useState } from 'react';
import './style.css';
import { CommandBar } from '@fluentui/react/lib/CommandBar';
import { initializeIcons } from '@fluentui/font-icons-mdl2';
initializeIcons();
import { DetailsList } from '@fluentui/react/';
import { Panel } from '@fluentui/react/lib/Panel';
import { useBoolean } from '@fluentui/react-hooks';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { Label } from '@fluentui/react/lib/Label';
import { TextField } from '@fluentui/react/lib/TextField';
import { useId } from '@fluentui/react-hooks';

const users = [
  {
    id: 1,
    Name: 'Hemanand',
    Email: 'hemanand@machdatum.com',
    PhoneNumber: 9942309510,
    Level: null,
  },
  {
    id: 2,
    Name: 'Administrator',
    Email: 'admin@machdatum.com',
    PhoneNumber: null,
    Level: null,
  },
];

export default function App() {
  const [Id, setId] = useState(null);
  const [Name, setName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [Level, setLevel] = useState(null);

  const _items = [
    {
      text: 'refresh',
      iconProps: { iconName: 'Refresh' },
    },
    {
      text: 'Add a user',
      iconProps: { iconName: 'AddFriend' },
      onClick: () => {
        openPanel();
      },
    },
    {
      text: 'Delete user',
      iconProps: { iconName: 'UserRemove' },
      disabled: true,
    },
  ];

  const [newLength, setNewLength] = useState(users);

  function handleAdd() {
    const setData = {
      Name: Name,
      Email: Email,
      PhoneNumber: PhoneNumber,
      Level: Level,
    };
    setNewLength([...newLength, setData]);
  }
  console.log(newLength);

  const columns = [
    {
      key: 'column1',
      name: 'Id',
      fieldName: 'id',
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: 'column2',
      name: 'Name',
      fieldName: 'Name',
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: 'column3',
      name: 'Email',
      fieldName: 'Email',
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: 'column4',
      name: 'PhoneNumber',
      fieldName: 'PhoneNumber',
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: 'column5',
      name: 'Level',
      fieldName: 'Level',
      minWidth: 100,
      maxWidth: 200,
    },
  ];

  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  const onRenderFooterContent = React.useCallback(() => (
    <div>
      <PrimaryButton onClick={handleAdd()}>Add</PrimaryButton>&nbsp;&nbsp;
      <DefaultButton onClick={dismissPanel}>Cancel</DefaultButton>
    </div>
  ));

  const textFieldId = useId('anInput');

  return (
    <div>
      <h2>Users</h2>
      <CommandBar items={_items} />
      <DetailsList items={users} columns={columns} />
      <Panel
        headerText="Add a user"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        onRenderFooterContent={onRenderFooterContent}
        isFooterAtBottom={true}
      >
        <div>
          <Label>Enter the details</Label>
          <Label htmlFor={textFieldId}>Id</Label>
          <TextField
            id={textFieldId}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <Label htmlFor={textFieldId}>Name</Label>
          <TextField
            id={textFieldId}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Label htmlFor={textFieldId}>Email</Label>
          <TextField
            id={textFieldId}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Label htmlFor={textFieldId}>PhoneNumber</Label>
          <TextField
            id={textFieldId}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <Label htmlFor={textFieldId}>Level</Label>
          <TextField
            id={textFieldId}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          />
        </div>
      </Panel>
    </div>
  );
}
