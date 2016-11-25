import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

import styles from './styles.css';

class MainContent extends Component {
  render() {
    return (
      <QueueAnim type="bottom" className={styles.content} component="div">
        <div key="ani1" className={styles.content_item}>
          <h4 className={styles.item_title}>
            IntersectionObserver API 使用教程
          </h4>
          <p className={styles.item_content}>
            传统的实现方法是，监听到scroll事件后，调用目标元素（绿色方块）的getBoundingClientRect()方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于scroll事件密集发生，计算量很大，容易造成性能问题。
          </p>
          <a className={styles.item_link}>查看全文</a>
        </div>
        <div key="ani2" className={styles.content_item}>
          <h4 className={styles.item_title}>
            IntersectionObserver API 使用教程
          </h4>
          <p className={styles.item_content}>
            传统的实现方法是，监听到scroll事件后，调用目标元素（绿色方块）的getBoundingClientRect()方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于scroll事件密集发生，计算量很大，容易造成性能问题。
          </p>
          <a className={styles.item_link}>查看全文</a>
        </div>
        <div key="ani3" className={styles.content_item}>
          <h4 className={styles.item_title}>
            IntersectionObserver API 使用教程
          </h4>
          <p className={styles.item_content}>
            传统的实现方法是，监听到scroll事件后，调用目标元素（绿色方块）的getBoundingClientRect()方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于scroll事件密集发生，计算量很大，容易造成性能问题。
          </p>
          <a className={styles.item_link}>查看全文</a>
        </div>
        <div key="ani4" className={styles.content_item}>
          <h4 className={styles.item_title}>
            IntersectionObserver API 使用教程
          </h4>
          <p className={styles.item_content}>
            传统的实现方法是，监听到scroll事件后，调用目标元素（绿色方块）的getBoundingClientRect()方法，得到它对应于视口左上角的坐标，再判断是否在视口之内。这种方法的缺点是，由于scroll事件密集发生，计算量很大，容易造成性能问题。
          </p>
          <a className={styles.item_link}>查看全文</a>
        </div>
      </QueueAnim>
    );
  }
}

export default MainContent;
