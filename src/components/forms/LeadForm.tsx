"use client";

import { useState, type FormEvent } from "react";
import { formObjectOptions } from "@/lib/data";

export function LeadForm({
  id = "request",
  compact = false,
  submitLabel = "Получить расчёт",
  onSubmitted,
}: {
  id?: string;
  compact?: boolean;
  submitLabel?: string;
  onSubmitted?: () => void;
}) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    onSubmitted?.();
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <p>Заявка принята. Свяжемся, чтобы уточнить задачу и особенности объекта.</p>
      </div>
    );
  }

  return (
    <form id={id} className="form" onSubmit={onSubmit}>
      <label>
        Ваше имя
        <input name="name" type="text" autoComplete="name" required />
      </label>
      <label>
        Телефон
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </label>
      {!compact && (
        <label>
          Тип объекта
          <select name="objectType" defaultValue="office" required>
            {formObjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      )}
      {!compact && (
        <label>
          Что необходимо охранять?
          <textarea name="task" rows={4} />
        </label>
      )}
      <button className="btn btn--signal btn--block" type="submit">
        {submitLabel}
      </button>
      <p className="form-note">Нажимая кнопку, вы соглашаетесь с обработкой предоставленных данных.</p>
    </form>
  );
}

export function PhoneForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    onSubmitted?.();
  }

  if (sent) {
    return (
      <div className="form-success" role="status">
        <p>Номер получен. Свяжемся и обсудим задачу.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Телефон
        <input name="phone" type="tel" autoComplete="tel" inputMode="tel" required />
      </label>
      <button className="btn btn--signal btn--block" type="submit">
        Получить консультацию
      </button>
    </form>
  );
}
