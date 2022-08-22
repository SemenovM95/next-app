import styles from "./listControls.module.scss";
import React from "react";

export default function listControls (props: any) {

  return (
    <div className={styles.controls}>
      <div className={styles.controls__sort}>
        <p>Sort by:</p>
        <select name="Sort" id="Sort" onChange={props.setSort}>
          <option value="ASC">A-Z</option>
          <option value="DESC">Z-A</option>
        </select>
      </div>
      <div className={styles.controls__searchParam}>
        <p>Search by:</p>
        <select name="Sort" id="Sort" onChange={props.setField}>
          <option value="description">Description</option>
          <option value="title">Title</option>
        </select>
      </div>
      <input
        type="text"
        placeholder="Search here"
        name="postSearch"
        value={props.searchValue}
        onInput={props.setSearch}
      />
    </div>
  )
}