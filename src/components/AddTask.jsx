/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o titulo da tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button 
      onClick={() => {
        if (!title.trim() || !desc.trim()){
          return alert('Preencha os campos')
        }
        onAddTaskSubmit(title, desc)
        setTitle('')
        setDesc('')
      }}
      className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
