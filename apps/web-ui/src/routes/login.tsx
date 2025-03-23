import { useSearchParams } from "react-router";

export default function Login() {
  let [searchParams, setSearchParams] = useSearchParams();
  let error = searchParams.get("error");

  let errorMessage = null;
  if (error === "MissingFields") {
    errorMessage = "Please enter both email and password";
  } else if (error === "InvalidCredentials") {
    errorMessage = "Invalid email or password";
  }

  function resetErrorOnChange() {
    if (error) {
      searchParams.delete("error");
      setSearchParams(searchParams);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="card-title text-2xl font-bold text-center mb-8">
            Login to Tanglenode
          </h1>
          {errorMessage && (
            <div className="alert alert-error mb-6">
              <div className="flex-none">{errorMessage}</div>
            </div>
          )}
          <form
            onChange={resetErrorOnChange}
            action="/login"
            method="post"
            className="space-y-6"
          >
            <div className="form-control">
              <label htmlFor="email" className="floating-label">
                <span className="label-text">Email</span>
                <input
                  autoComplete="email"
                  className="input input-bordered w-full"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="password" className="floating-label">
                <span className="label-text">Password</span>
                <input
                  autoComplete="current-password"
                  className="input input-bordered w-full"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </label>
            </div>
            <button className="btn btn-primary w-full" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
