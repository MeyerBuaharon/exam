import React from "react";
import { Container, Content,StyledToolbar } from "../../shared/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actionCreators from "../../reducers/categories/categories-actions";
import CategoryList from "./CategoryView/View";
import { compose, withHandlers, withStateHandlers, withState } from "recompose";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import styled from "styled-components";
import CategoryForm from "./CategoryForm";


const Categories = ({
  category,
  isOpen,
  open,
  deleteItem,
  selectItem,
  selectedItem,
  setItem,
  updateItem,
  createItem
}) => (
  <Container>
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="title">Categories</Typography>
        <Button
          color="inherit"
          onClick={() => {
            isOpen(true);
          }}
        >
          Create
        </Button>
      </StyledToolbar>
    </AppBar>
    <Content>
      <CategoryList
        data={category}
        deleteItem={deleteItem}
        selectItem={selectItem}
      />
    </Content>
    <Dialog open={open}>
      <DialogTitle id="form-dialog-title">
        {selectedItem ? "Update" : "Create"}
      </DialogTitle>
      <DialogContent>
        <CategoryForm
          obj={selectedItem && null}
          onSubmit={selectedItem ? updateItem : createItem}
        />
      </DialogContent>
    </Dialog>
  </Container>
);

const mapStateToProps = state => {
  return {
    category: state.categoryReducer.Categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCategory: item => dispatch(actionCreators.add(item)),
    deleteCategory: item => dispatch(actionCreators.remove(item)),
    updateCategory: item => dispatch(actionCreators.update(item))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withState("open", "isOpen", false),
  withState("selectedItem", "setItem", null),
  withHandlers({
    createItem: ({ isOpen, createCategory }) => newCategory => {
      createCategory(newCategory);
      isOpen(false);
    },
    deleteItem: ({ deleteCategory }) => Category => {
      deleteCategory(Category);
    },
    updateItem: ({ updateCategory, isOpen, setItem }) => Category => {
      updateCategory(Category);
      setItem(null);
      isOpen(false);
    },
    selectItem: ({ isOpen, setItem, selectedItem }) => Category => {
      setItem(Category);
      console.log(selectedItem);
      isOpen(true);
    }
  })
)(Categories);
