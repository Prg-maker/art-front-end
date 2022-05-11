import styled from 'styled-components';

export const Container = styled.div`
  position: relative;


  .left{

    position: absolute;
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    height: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(to right, #eee , #fff ,  white  );
    margin-top: 45px;


    &:hover{
      filter: brightness(0.8);

    }


  }

  .cards{
    display: flex;
    gap: 6rem;
    margin-top: 7rem;
    overflow-y: hidden;
    overflow-x: auto;
    padding: 0 50px;




    >div{
      margin-bottom: 50px;
    }
  }

  .right{

    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    height: 50%;

    display: flex;
    align-items: center;
    cursor: pointer;
    background: linear-gradient(to right, #eee , #fff ,  white  );
    margin-top: 45px;

    &:hover{
      filter: brightness(0.8);

    }

  }
`;
