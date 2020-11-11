import React, { FunctionComponent } from "react";

import "./form.css";

import { useQuery, gql } from "@apollo/client";

const FormTemplate: FunctionComponent<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}> = ({ children, onSubmit }) => {
  const {
    loading: imageLoading,
    data: image,
    error: imageError,
  } = useQuery(gql`
    {
      image: randomImage {
        url_full
        url_regular
        meta_url
        user {
          url
          name
        }
      }
    }
  `);

  return (
    <div
      className="loginPage page"
      style={{
        backgroundImage: `url(${image?.image?.url_regular || ""})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      <form className="loginForm" onSubmit={onSubmit}>
        {children}
      </form>

      {imageLoading ? (
        <div className="attribution">Loading...</div>
      ) : (
        !imageError && (
          <div className="attribution">
            Photo by <a href={image.image.user.url}>{image.image.user.name}</a>{" "}
            on <a href={image.image.meta_url}>Unsplash</a>
          </div>
        )
      )}
    </div>
  );
};

export default FormTemplate;
