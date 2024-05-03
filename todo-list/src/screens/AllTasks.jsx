import { useEffect } from "react";
import { Text } from "react-native";
import { getAllTasks } from "../services/todoServices";


export default function AllTasks() {

useEffect(() => {
  const fetch = async () => {
    const data = await getAllTasks()
    console.log(data)
  }
  fetch()
}, [])

  return (
    <Text>ALL TASKS</Text>
  )
}