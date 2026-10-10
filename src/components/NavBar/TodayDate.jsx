// components/TodayDate.jsx
"use client";
import { useSyncExternalStore } from "react";

function getBanglaDate() {
  const parts = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).formatToParts(new Date());

  const get = (t) => parts.find((p) => p.type === t)?.value;
  return `${get("weekday")}, ${get("day")} ${get("month")}, ${get("year")}`;
}

const subscribe = () => () => {}; // তারিখ নিজে নিজে বদলায় না, তাই সাবস্ক্রাইবের কিছু নেই

export default function TodayDate({ className = "" }) {
  const date = useSyncExternalStore(
    subscribe,
    getBanglaDate, // ক্লায়েন্টে এই মান
    () => ""       // সার্ভারে ও হাইড্রেশনের সময় এই মান
  );

  return <span className={`inline-block min-w-40 ${className}`}>{date}</span>;
}