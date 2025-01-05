import Header from '../components/Header'
import { Main } from '../styles/Sections';
import { eventLocalStorageToken } from '../consts';
import { EventHistoryItem } from '../types';
import styled from 'styled-components';

const Title = styled.span`
  font-weight: bold;
`;

const ListItem = styled.li`
  margin-bottom: 1rem;
`;

const Note = styled.span`
  display: block;
`;

export const History = () => {
  const historyItems = localStorage.getItem(eventLocalStorageToken);
  const parsedItems = JSON.parse(historyItems || '""');
  const eventHistory: EventHistoryItem[] = parsedItems.events ?? [];
  
  const sortedHistory = eventHistory.sort((a, b) => {
    const dateA = new Date(a.datetime);
    const dateB = new Date(b.datetime);

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <>
      <Header />
      <Main>
        {sortedHistory.length === 0 ? (
          <p>No history yet</p>
         ) : (
          <ul>
            {sortedHistory.map(({ title, duration, datetime, notes}) => (
              <ListItem key={datetime.toString()}>
                <Title>{title}</Title>
                <Note>{new Date(datetime).toLocaleString()}</Note>
                <Note>{duration} second{Number(duration) === 1 ? '' : 's'}</Note>
                <Note>{notes && notes}</Note>
              </ListItem>
            ))}
          </ul>
        )}
      </Main>
    </>
  );
};
