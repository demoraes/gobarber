import styled from 'styled-components';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ProviderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})`
  margin-top: 60px;
  padding: 0 20px;
`;
