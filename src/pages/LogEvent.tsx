import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { BaseSyntheticEvent } from 'react';
import { Button, ButtonContainer } from '../styles/Button';
import styled, { css } from 'styled-components';
import { Main } from '../styles/Sections';
import { EventHistoryItem } from '../types';
import { eventLocalStorageToken } from '../consts';

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`;

const Base = css`
  display: block;
  padding: 1rem;
  border: 1px solid var(--gray);
  border-radius: 3px;
  width: 100%;
`;

const Input = styled.input`
  ${Base}
`;

const Textarea = styled.textarea`
  ${Base}
`;

export const LogEvent = () => {
  const { register, handleSubmit, reset } = useForm<EventHistoryItem>();

  return (
    <>
      <Header />
        <form onSubmit={handleSubmit(submitForm)}>
        <Main>
          <Label>
            Title
            <Input {...register('title')} required type="text" />
          </Label>
          <Label>
            Datetime
            <Input {...register('datetime')} type="datetime-local" />
          </Label>
          <Label>
            Duration (seconds)
            <Input {...register('duration')} required type="number" />
          </Label>
          <Label>
            Notes
            <Textarea {...register('notes')} />
          </Label>
        </Main>
        <ButtonContainer>
          <Button type="submit">Submit</Button>
        </ButtonContainer>
      </form>
    </>
  );

  function submitForm(data: EventHistoryItem, event?: BaseSyntheticEvent) {
    event?.preventDefault();
    const eventHistory = localStorage.getItem(eventLocalStorageToken);

    const historyItem: EventHistoryItem = { ...data };

    if (eventHistory) {
      const parsedHistory = JSON.parse(eventHistory).events;
      if (Array.isArray(parsedHistory)) {
        parsedHistory.push(historyItem);
        localStorage.setItem(
          eventLocalStorageToken,
          JSON.stringify({ events: parsedHistory })
        );
      } else {
        localStorage.setItem(
          eventLocalStorageToken,
          JSON.stringify({ events: [historyItem] })
        );
      }
    } else {
      localStorage.setItem(
        eventLocalStorageToken,
        JSON.stringify({ events: [historyItem] })
      );
    }

    reset();
  }
};
