import styles from "../styles/Content.module.scss";
import Image from "next/image";

export default function WhatIsFibrosis() {
  return (
    <div>
      <div>
        <h1>What is Fibrosis?</h1>
        <div className={styles.content}>
          <p>
            Fibrosis, also referred to as fibrotic scarring, is a pathological
            form of wound healing where connective tissue replaces healthy
            parenchymal tissue to the point where it continues unchecked,
            significantly remodelling the surrounding tissue and producing
            permanent scar tissue.
          </p>
          <p>
            When fibroblasts unintentionally produce an excessive amount of
            extracellular matrix components, like collagen, the result is a
            permanent fibrotic scar. This condition is caused by repeated
            injuries, chronic inflammation, and repair.
          </p>
          <div className={styles.horizontal}>
            <figure style={{ textAlign: "center" }}>
              <Image
                src="/assets/fibrosis_2.jpg"
                alt="Fibrosis"
                style={{ borderRadius: "10px" }}
                width={420}
                height={250}
              />
              <figcaption>Pulmonary Fibrosis (PF)</figcaption>
            </figure>
          </div>
          <p>
            Scarring is the body&apos;s natural response to injury, and a
            fibroma is a fibrosis that develops from a single cell line.
            Fibrosis physically deposits connective tissue, which can hinder or
            completely prevent the underlying organ or tissue&apos;s normal
            architecture and function. Both the pathological condition of
            excessive fibrous tissue deposition and the formation of connective
            tissue during healing are both referred to as fibrosis. Fibrosis,
            which is characterised by the pathological accumulation of
            extracellular matrix (ECM) proteins, causes the affected tissue to
            scar and thicken; it is essentially an accelerated wound healing
            response that impairs normal organ function.
          </p>
        </div>
      </div>
      <div>
        <h2>Types of Fibrosis</h2>
        <div className={styles.content}>
          <p>
            There are many types of fibrosis, and they are classified by the
            organ or tissue affected. The most common types of fibrosis are as
            follows:
          </p>
          <div className={styles.horizontal}>
            <ul>
              <li>Lung Fibrosis or Pulmonary Fibrosis</li>
              <li>Liver Fibrosis </li>
              <li>Heart Fibrosis</li>
              <li>Mediastinal Fibrosis</li>
            </ul>
            <ul>
              <li>Retroperitoneal Cavity Fibrosis</li>
              <li>Bone Marrow Fibrosis</li>
              <li>Skin Fibrosis</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2>Pulmonary Fibrosis</h2>
        <div className={styles.content}>
          <p>
            The word &quot;pulmonary&quot; means lung and the word
            &quot;fibrosis&quot; means scar tissue— similar to scars that form
            on the skin from an old injury or surgery. So, in its simplest
            sense, pulmonary fibrosis (PF) means scarring in the lungs. Over
            time, the scar tissue blocks the movement of oxygen from inside the
            tiny air sacs in the lungs into the bloodstream. Low oxygen levels
            (and the stiff scar tissue itself) can cause people who have
            pulmonary fibrosis to feel short of breath, particularly when
            walking and exercising.
          </p>
          <div className={styles.horizontal}>
            <figure>
              <Image
                src="/assets/fibrosis_1.jpg"
                alt="Fibrosis"
                width={420}
                height={250}
              />
              <figcaption style={{ textAlign: "center" }}>
                Pulmonary Fibrosis (PF)
              </figcaption>
            </figure>
          </div>
          <p>
            Pulmonary fibrosis isn&apos;t just one disease. It is a family of
            more than 200 this link will open a new tab.different lung
            diseasesthis link will open a new tab. that all look very much
            alike. The PF family of lung diseases is part of an even larger
            group of diseases called interstitial lung diseases (also known as
            ILD), which includes all of the diseases that have inflammation
            and/or scarring in the lung. In ILDs, it is the walls of the air
            sacs of the lung, and the tissue and space around these air sacs,
            where the injury and damage occur. Some interstitial lung diseases
            don&apos;t include scar tissue. When an interstitial lung disease
            does include scar tissue in the lung, we call it pulmonary fibrosis.
          </p>
        </div>
      </div>
      <div>
        <h2>Symptoms of Pulmonary Fibrosis</h2>
        <div className={styles.content}>
          <p>
            One reason pulmonary fibrosis often goes misdiagnosed is that
            symptoms of PF can be similar to symptoms of other lung diseases.
            Most people with PF develop symptoms between the ages of 50 and 70
            years. There are many types of lung disease that can cause pulmonary
            fibrosis.
          </p>
          <p>
            Shortness of breath may mean that your body is not getting enough
            oxygen.
          </p>
          <div>
            <ul>
              <li>Shortness of breath, particularly during exercise</li>
              <li>Dry, hacking cough</li>
              <li>Fast, shallow breathing</li>
              <li>Gradual unintended weight loss</li>
              <li>Tiredness</li>
              <li>Aching joints and muscles</li>
              <li>
                Clubbing (widening and rounding) of the tips of the fingers or
                toes
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h2>Methods to Prevent Pulmonary Fibrosis</h2>
        <div className={styles.content}>
          <p>
            There are currently no established ways to prevent pulmonary
            fibrosis, particularly since in most cases the cause of the disease
            cannot be identified. The best way to prevent pulmonary fibrosis is,
            therefore, to avoid potential risks and to undergo regular medical
            examinations. In addition to being aware of risk factors that can
            increase the likelihood of developing pulmonary fibrosis, patients
            should also pay attention to specific symptoms.
          </p>
          <p>
            The similarity between the symptoms of pulmonary fibrosis and other
            respiratory diseases can make diagnosis difficult. However, early
            diagnosis can help prevent further complications. Once the scar
            tissue is fully formed, it cannot be removed or reversed, which is
            why treatment aims to slow the progression of the disease and ease
            the symptoms.
          </p>
        </div>
      </div>
    </div>
  );
}
